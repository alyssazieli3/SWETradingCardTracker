import requests
from bs4 import BeautifulSoup
import pandas as pd
import time

#run this file to produce csv with card data

sealed_product_keywords = [
    "booster pack","booster box","elite trainer box","etb","display box",
    "factory sealed","blister","theme deck","starter deck","pokemon tin",
    "promo set","bundle","collection"
]

sealed_product_pattern = '|'.join(sealed_product_keywords)

PRICECHARTING_BASE_URL = "https://www.pricecharting.com"
POKEMON_CATEGORY_PAGE = f"{PRICECHARTING_BASE_URL}/category/pokemon-cards"

http_headers = {"User-Agent": "Mozilla/5.0"}

print("Retrieving Pokémon set list...")

category_page_response = requests.get(POKEMON_CATEGORY_PAGE, headers=http_headers)
category_page_soup = BeautifulSoup(category_page_response.text, "html.parser")

pokemon_set_links = category_page_soup.select('a[href^="/console/pokemon"]')
pokemon_set_urls = list(set(
    PRICECHARTING_BASE_URL + link["href"] for link in pokemon_set_links
))

pokemon_set_urls = [
    set_url for set_url in pokemon_set_urls
    if "japanese" not in set_url.lower()
]

pokemon_card_records = []

print(f"Found {len(pokemon_set_urls)} Pokémon sets. Beginning card scrape...")

for set_page_url in pokemon_set_urls:

    try:
        sorted_set_url = f"{set_page_url}?sort=highest-price"

        set_page_response = requests.get(sorted_set_url, headers=http_headers)
        set_page_soup = BeautifulSoup(set_page_response.text, "html.parser")

        card_table_rows = set_page_soup.select("table tr")

        for card_row in card_table_rows:

            card_columns = card_row.find_all("td")

            if len(card_columns) >= 5:

                image_tag = card_columns[0].find("img")
                card_image_url = image_tag["src"] if image_tag else ""

                card_name = card_columns[1].text.strip()
                ungraded_price_text = card_columns[2].text.strip().replace("$","").replace(",","")
                psa9_price_text = card_columns[3].text.strip().replace("$","").replace(",","")
                psa10_price_text = card_columns[4].text.strip().replace("$","").replace(",","")

                pokemon_card_records.append({
                    "Card_Set": set_page_url.split("/")[-1],
                    "Card_Name": card_name,
                    "Ungraded_Price": ungraded_price_text,
                    "PSA9_Price": psa9_price_text,
                    "PSA10_Price": psa10_price_text,
                    "Card_Image_URL": card_image_url
                })

    except Exception as scrape_error:
        print(f"Error scraping {set_page_url}: {scrape_error}")

    time.sleep(0.3)

pokemon_cards_dataframe = pd.DataFrame(pokemon_card_records)

pokemon_cards_dataframe["Clean_Card_Name"] = pokemon_cards_dataframe["Card_Name"].str.strip()

pokemon_cards_dataframe = pokemon_cards_dataframe[
    ~pokemon_cards_dataframe["Clean_Card_Name"].str.contains(
        sealed_product_pattern, case=False, na=False
    )
]

pokemon_cards_dataframe = pokemon_cards_dataframe.drop(columns=["Clean_Card_Name"])

price_columns = ["Ungraded_Price", "PSA9_Price", "PSA10_Price"]

for price_column in price_columns:
    pokemon_cards_dataframe[price_column] = pd.to_numeric(
        pokemon_cards_dataframe[price_column],
        errors="coerce"
    )

pokemon_cards_dataframe["Card_Set"] = pokemon_cards_dataframe["Card_Set"].str.replace(
    "pokemon-", "", regex=False
)

output_csv_file = "data/pokemon_card_price_data.csv"

pokemon_cards_dataframe.to_csv(output_csv_file, index=False)

print("\nScraping complete.")
print(f"Total cards scraped: {len(pokemon_cards_dataframe)}")
print(f"Data saved to: {output_csv_file}")