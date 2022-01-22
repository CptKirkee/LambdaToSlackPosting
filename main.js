# -> why icon will only show ones in a long row of message: https://stackoverflow.com/questions/42091608/slack-post-by-bot-not-always-containing/42109435#42109435
#!/usr/bin/python3.6
import urllib3
import json
import random

http = urllib3.PoolManager()
def lambda_handler(event, context):
    
    #Generating a random number
    randomNumber = random.randint(0,3)
    print(randomNumber)
    
    #Slack channel and message specifications
    url = "https://hooks.slack.com/services/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"
    msg = {
        "channel": "mindfulness-tips",
        "username": "WEBHOOK_USERNAME",
        "text": "test",
        "icon_emoji": ""
    }

    #Not sure what this does
    encoded_msg = json.dumps(msg).encode('utf-8')
    resp = http.request('POST',url, body=encoded_msg)
    print({
        #"message": event['Records'][0]['Sns']['Message'], 
        "status_code": resp.status, 
        "response": resp.data
    })
