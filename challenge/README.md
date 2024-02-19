# Challenge

Lawgic technical test


Create virtual environment before installing any dependencies so that they are not installed globally.
Look for how to create it depending on your operating system, windows, linux, mac.
Run pip install -r requirements.txt to install the dependencies.
Create the database in MySQL, configure the account in settings.py.
Run the migrations and finally run python manage.py runserver to get the back-end server up.

# Important commands

Migrations:
python manage.py makemigrations
python manage.py migrate

Raise the server:
python manage.py runserver

Create superuser (if necessary):
python manage.py createsuperuser


