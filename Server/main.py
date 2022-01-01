from flask import Flask
from flask_restful import Resource, Api, reqparse
import json, random
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
API = Api(app)

class Give_Curse(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument("curseWord", required=True)
        args = parser.parse_args()

        words = []

        with open("curse_words.json", 'r') as f:
            words = json.loads(f.read())["words"]
            if (args["curseWord"] in words):
                return {"reason": "Word already known", "success": False}, 400
            words.append(args["curseWord"])
        
        with open("curse_words.json", 'w') as f:
            f.write(json.dumps({"words": words}))

        return {"data": args["curseWord"], "success": True}, 200
    pass

class Retrieve_Random_Curse(Resource):
    def get(self):
        with open("curse_words.json", 'r') as f:
            file = f.read()
            json_data = json.loads(file)["words"]
            return { "data": json_data[random.randrange(len(json_data))] }, 200
    pass

class Retrieve_Curses(Resource):
    def post(self):
        with open("curse_words.json", 'r') as f:
            return { "data": json.loads(f.read())["words"] }, 200

API.add_resource(Give_Curse, "/give_curse")
API.add_resource(Retrieve_Random_Curse, "/retrieve")
API.add_resource(Retrieve_Curses, "/retrieve/all")

if __name__ == '__main__':
    app.run()