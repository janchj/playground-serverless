# playground-serverless

The idea so far:
    - wunderlist
        - list of recipes
    - ocado
        - add item to basket
    - price watch

        What do you need?
            - name
            - startDate
            - endDate
            - peopleCount

        Sources:
            - hotels.com
            - bookings.com
            - kayak.com
            - expedia.com
            - trivago.com

# Ceremony:
    - Install packages:
        - npm install -g serverless
        - npm install

    - Configure AWS credentials: [https://serverless.com/framework/docs/providers/aws/guide/credentials]
        Once you got them, run the following command:
        `serverless config credentials --provider aws --key {yourKey} --secret {yourSecret}`

# Deployment
    - serverless deploy -v -> to deploy all functions
    - serverless deploy function -f {functionName} -> to deploy a single function
    - serverless info -> to get info about your deployed function(s)

# Handy things
    - serverless remove -> removes all the deployed function(s)
    - serverless invoke -f hello -l -> call a function

    url: https://{name}.amazonaws.com/{functionName}'