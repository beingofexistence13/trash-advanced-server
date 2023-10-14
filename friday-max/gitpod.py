# pip install selenium
# from time import sleep
# from selenium import webdriver
# from selenium.webdriver.chrome.options import Options
# from selenium.webdriver.common.by import By
# import warnings
# warnings.simplefilter("ignore")

# # chrome_driver_path = 'chromedriver.exe'
# # driver = webdriver.Chrome(executable_path=chrome_driver_path, options=chrome_options)

# link = "https://gpt4login.com/use-chatgpt-online-free"
# chrome_options = Options()
# chrome_options.headless = True
# chrome_options.add_experimental_option('excludeSwitches', ['enable-logging'])
# driver = webdriver.Chrome(options=chrome_options)
# chrome_options.add_argument('--log-level=3')
# driver.maximize_window()
# driver.get(link)

# # File Operations :- Writing, Reading
# def FileReader():
#     File = open("Chatnumber.txt", "r")
#     Data = File.read()
#     File.close()
#     return Data


# def FileWriter(Data):
#     File = open("Chatnumber.txt", "w")
#     File.write(Data)
#     File.close()

# # Sending The Query To The Website :-
# def ChatGPTBrain(Query):
#     Query = str(Query)
#     driver.find_element(
#         by=By.XPATH, value="/html/body/div[1]/div/div/main/article/div/div/div/div/div/div/div[2]/div/div/div[2]/div/textarea").send_keys(Query)
#     sleep(1)
#     driver.find_element(
#         by=By.XPATH, value="/html/body/div[1]/div/div/main/article/div/div/div/div/div/div/div[2]/div/div/div[2]/button/span").click()
#     Data = str(FileReader())

# # Getting Replies :-
#     while True:
#         sleep(0.5)
#         try:
#             AnswerXpath = f"/html/body/div[1]/div/div/main/article/div/div/div/div/div/div/div[2]/div/div/div[1]/div[{Data}]/span[2]"
#             Answer = driver.find_element(
#                 by=By.XPATH, value=AnswerXpath).is_displayed()
#             if str(Answer) == "True":
#                 break
#         except:
#             pass

#     AnswerXpath = f"/html/body/div[1]/div/div/main/article/div/div/div/div/div/div/div[2]/div/div/div[1]/div[{Data}]/span[2]"
#     Answer = driver.find_element(by=By.XPATH, value=AnswerXpath).text
#     NewData = int(Data) + 2
#     FileWriter(Data=str(NewData))
#     return Answer


# # Rest Of The Code
# print("Starting The GPT4-Model.")
# FileWriter(Data='3')
# while True:
#     try:
#         Query = input("Enter Your Query : ")
#         print(ChatGPTBrain(Query=Query))
#     except:
#         pass











# import io 
# from bardapi import BardCookies
# import datetime
# import pyperclip
# import pyautogui
# import webbrowser
# from time import sleep
# import  json
# import keyboard
# import requests
# from selenium import webdriver
# from selenium.webdriver.chrome.options import Options
# from selenium.webdriver.common.by import By
# import warnings
# import os
# import uuid
# import pyperclip
# import pandas as pd
# warnings.simplefilter("ignore")


# webbrowser.open("https://gitpod.io/")
# sleep(2)
# pyautogui.click(x=1737, y=50)
# sleep(1)
# pyautogui.click(x=1559, y=75)
# sleep(1)
# keyboard.press_and_release('ctrl + w')

# def CookieScrapper():
#     webbrowser.open("https://bard.google.com")
#     sleep(2)
#     pyautogui.click(x=1737, y=50)
#     sleep(1)
#     pyautogui.click(x=1559, y=75)
#     sleep(1)
#     keyboard.press_and_release('ctrl + w')

#     # Get data from clipboard
#     data = pyperclip.paste()

#     # Specify the filename
#     filename_json = 'bardCookie.json'

#     # Create 'database' directory if it doesn't exist
#     if not os.path.exists('database'):
#         os.makedirs('database')

#     # Create or overwrite the file in the 'database' directory and write data to it
#     with open(os.path.join('database', filename_json), 'w') as f:
#         # Convert string data to JSON format and write to file
#         json.dump(json.loads(data), f)

#     # Read the content of the file and print it
#     with open(os.path.join('database', filename_json), 'r') as f:
#         content = json.load(f)
#         print(content)

#     try:
#         json_data = json.loads(data)
#         pass

#     except json.JSONDecodeError as e:
#         print(f"Error parsing JSON data: {e}")

#     SID = "__Secure-1PSID"
#     TS = "__Secure-1PSIDTS"
#     CC = "__Secure-1PSIDCC"

#     SIDValue = next((item for item in json_data if item["name"] == SID), None)
#     TSValue = next((item for item in json_data if item["name"] == TS), None)
#     CCValue = next((item for item in json_data if item["name"] == CC), None)

#     if SIDValue is not None:
#         SIDValue = SIDValue["value"]
#     else:
#         print(f"{SIDValue} not found in the JSON data.")

#     if TSValue is not None:
#         TSValue = TSValue["value"]
#     else:
#         print(f"{TSValue} not found in the JSON data.")

#     if CCValue is not None:
#         CCValue = CCValue["value"]
#     else:
#         print(f"{CCValue} not found in the JSON data.")

#     cookie_dict = {
#         "__Secure-1PSID": SIDValue ,
#         "__Secure-1PSIDTS": TSValue,
#         "__Secure-1PSIDCC": CCValue,
#     }
#     # print(cookie_data(data, filename=filenamedate))

#     return cookie_dict

# try:
#     bard = BardCookies(cookie_dict=cookie_dict)
# except Exception as e:
#     cookie_dict = CookieScrapper()
#     bard = BardCookies(cookie_dict=cookie_dict)
#     print("Yes, there is a cookie error:", str(e),"And Using CookieScrapper!!!")
# else:
#     print("")

# # Text Modification Function -
# def split_and_save_paragraphs(data, filename):
#     paragraphs = data.split('\n\n')
#     with open(filename, 'w') as file:
#         file.write(data)
#     data = paragraphs[:2]
#     separator = ', '
#     joined_string = separator.join(data)
#     return joined_string

# # Main Execution
# while True:
#     Question = input("Enter Your Query : ")
#     RealQuestion = str(Question)
#     results = bard.get_answer(RealQuestion)['content']
#     current_datetime = datetime.datetime.now()
#     formatted_time = current_datetime.strftime("%H%M%S")
#     filenamedate = str(formatted_time) + str(".txt")
#     filenamedate = "database//" + filenamedate
#     print(split_and_save_paragraphs(results, filename=filenamedate))



