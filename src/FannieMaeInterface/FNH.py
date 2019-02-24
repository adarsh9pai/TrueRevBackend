from flask import Flask, request, json
import requests
app = Flask(__name__)

@app.route('/mortgageLenderSentiment')
def mortgageLenderSentiment():

    fetchData = ''
    headers = {
    'accept': 'application/json',
    'Authorization': 'eyJraWQiOiJyRzhja1lKNXFnS2FwNitpVG52UWpmM1pSK1lpRG9GOFY5c1pjR1B3MGUwPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206b3JnYW5pemF0aW9uIjoiVVQgQXJsaW5ndG9uIiwic3ViIjoiZDA5YmQxY2EtYzRmYy00YzZiLTljNTYtOWRiYThjZDVhOWM3IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0c1allJTEVxWCIsImNvZ25pdG86dXNlcm5hbWUiOiJodWdoLmJveUBtYXZzLnV0YS5lZHUiLCJjdXN0b206am9iX3RpdGxlIjoiT3RoZXIiLCJnaXZlbl9uYW1lIjoiSHVnaCIsImF1ZCI6IjM4MGRpaXRtc2JhN2Q2MjIwaDhsc3ExYnFvIiwiZXZlbnRfaWQiOiIxYTRjZDg0OC0zN2I2LTExZTktYWM5Yy1jMzRlMjQ3NDRjMzQiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTU1MDk1OTA4NywiY3VzdG9tOmpvYl90aXRsZV9vdGhlciI6IlN0dWRlbnQiLCJleHAiOjE1NTA5NjgxMzMsImlhdCI6MTU1MDk2NDUzMywiZmFtaWx5X25hbWUiOiJCb3kiLCJlbWFpbCI6Imh1Z2guYm95QG1hdnMudXRhLmVkdSJ9.R0ypSHLQLiPcdOh3IPmn9gmJ26zXSwXx3awQM1B6xUi79SFcSCJJ6uWDYmxbxtOkDh_WLy1_Ph-E4flQXrcNS_PYyL9nFIWlWfnFAJdI37D62cOWPjnyLfWCTqN0Q_7ySsi_lQvxdRMvrYRONonA6BwEoo2edH9bkVExBALHJEsyWna3ReYqT-Jr4Af3Iwe_Pm7ZgOy6m7oPa-qncvy5m4tWV0aLBpxAuWlb1wYouleIUwGZS14zrk_VHa7_WSVutFsMTj2kQ7zYPUL8QSu4wo-iKLCbVEDtLnCdOWbH_r7aZ1N_1Ah2Y0sKpUCs3Z7IACY7Uc3FyKK6IYDUJH6W5Q',
}

    filter = request.args.get('filter')
    if filter == 'all':
        response = requests.get('https://api.theexchange.fanniemae.com/v1/mortgage-lender-sentiment/results', headers=headers)
        fetchData = response
    else:
        fetchData = {
            'message' : 'failure'
        }
        fetchData = fetchData.json()
    return fetchData


app.run(host = '127.0.0.1', port = 3001)