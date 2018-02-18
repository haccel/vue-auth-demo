from flask_restful import Resource

class Login(Resource):
    def post(self):
        print('login')
        return {'hello': 'world'}

class SignUp(Resource):
    def post(self):
        print('signup')
        return {'hello': 'world'}
