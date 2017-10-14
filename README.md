# playground-serverless

The idea so far:
    connect alexa to personal google account to get list of upcoming birthdays/events

# Ceremony:
    - Install packages:
        - npm install -g serverless
        - npm install

    - Configure AWS credentials:
    [What do you mean by credentials?] (https://serverless.com/framework/docs/providers/aws/guide/credentials)
    Once you got them, run the following command:
    `serverless config credentials --provider aws --key {yourKey} --secret {yourSecret}`

# Deployment
    - serverless deploy -v -> to deploy all functions
    - serverless deploy function -f {functionName} -> to deploy a single function
    - serverless info -> to get info about your deployed function(s)

# Handy things
    - serverless remove -> removes all the deployed function(s)
    - serverless invoke -f hello -l -> call a function

    - url:
        https://aws-nodejs-dev-hello.execute-api.us-east-1.amazonaws.com/dev/hello

        