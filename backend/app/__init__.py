import logging
from flask import Flask
from .config import DevConfig
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_restful import Api
from . import api as api
from flask_cors import CORS
log = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app, origins="http://localhost:8080", allow_headers=[
    "Content-Type", "Authorization", "Access-Control-Allow-Credentials"],
    supports_credentials=True, intercept_exceptions=False)
app.config.from_object(DevConfig)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
apilib = Api(app)


apilib.add_resource(api.Login, '/auth/login')
apilib.add_resource(api.SignUp, '/auth/signup')

