import os
basedir = os.path.abspath(os.path.dirname(__file__))

class DevConfig(object):
    DEBUG = True
    CORS_ENABLED = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False