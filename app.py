from flask import Flask,render_template,request,flash,redirect,url_for,Response
from register_user import Register
from login_user import Login
import json
from createOrder import Order

app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

@app.route("/", methods = ["GET","POST"])
def registerUser():

    if request.method == 'POST':
        print('requested')
        User_data = json.loads(request.data)
        print(User_data['name'])
        print(User_data['email'])
        print(User_data['password'])

        # UserName = request.form.get("Uname")
        # Email = request.form.get("Email")
        # PassWord = request.form.get("Pass")

        Register().registerUser(User_data['name'],User_data['email'],User_data['password'])


        return("User register. Please check Database")
    return render_template('Register.html')

@app.route("/Login", methods =["GET","POST"])
def loginUser():

    if request.method == 'POST':
        User_data = json.loads(request.data)
        print(User_data['email'])
        print(User_data['password'])

        if Login().loginUser(User_data['email'],User_data['password']):
            return Response(status=200)

        else:
            flash('Login Unsuccessful. Try Again.... ', 'error')
            return Response(status=401)
    
    return render_template('Login.html')

@app.route('/Puja', methods = ['GET'])
def poojaSelection():

    pujaList = Order().getPujalist()

    return pujaList


if __name__ == "__main__":
    app.run(debug=True)
