from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains

url = "http://portal.acttv.in/group/blr/myaccount"

#browser.get(url)

driver = webdriver.Firefox()
driver.get(url)
# You need a mouse to hover the span elements here
mouse = webdriver.ActionChains(driver)    
driver.implicitly_wait(10)
# You need get the span element from its xpath:
value = 'My Package'
span_xpath = '//span[contains(text(), "' + value + '")]'
span_element = driver.find_element_by_xpath(span_xpath)

# Then you hover on span element by mouse and click on it:
mouse.move_to_element(span_element).click().perform()

elementz = driver.find_elements_by_xpath('//td[contains(@class, "packagecol3")]')

print(elementz[3].get_attribute("innerHTML"))
