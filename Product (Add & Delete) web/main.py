from flask import Flask,request,jsonify
from flask_cors import CORS
import psycopg2

app = Flask(__name__)
CORS(app)

DB_HOST = "localhost"
DB_NAME = "******"
DB_USER = "postgres"
DB_PORT = "****"
DB_PASS = "****"

@app.route('/api/products',methods = ['POST'])
def app_products():
   data = request.get_json()
   name = data.get('name')
   price = data.get('price')
   quantity = data.get('quantity')
   print("ค่าที่ได้:",name)
   print("ค่าที่ได้:",price)
   print("ค่าที่ได้:",quantity)
   
   conn = psycopg2.connect(host=DB_HOST,database=DB_NAME,user=DB_USER,port=DB_PORT,password=DB_PASS)
   cur = conn.cursor()
   cur.execute(
       "INSERT INTO products(name,price,quantity) VALUES (%s,%s,%s)",
       (name,price,quantity)
   )
   conn.commit()
   cur.close()
   conn.close
   return jsonify({
    "status": "success","message":"บันทึกสินค้าเรียบร้อย"
    }), 201
    
    
@app.route('/api/products',methods=['GET'])
def get_products():
    conn = psycopg2.connect(host=DB_HOST,database=DB_NAME,user=DB_USER,port=DB_PORT,password=DB_PASS)
    cur = conn.cursor()
    cur.execute("SELECT id,name,price,quantity FROM products ORDER BY id DESC;")
    rows = cur.fetchall()
    cur.close
    conn.close()
    
    products = []
    for row in rows:
        products.append({
            "id":row[0],
            "name":row[1],
            "price":float(row[2]),
            "quanttity":row[3]
        })
        
    return jsonify(products)

@app.route('/api/products/<int:product_id>',methods=['DELETE'])
def delete_product(product_id):
    conn = psycopg2.connect(host=DB_HOST,database=DB_NAME,user=DB_USER,port=DB_PORT,password=DB_PASS)
    cur = conn.cursor()
    cur.execute("DELETE FROM products WHERE id=%s;",(product_id,))
    conn.commit()
    cur.close()
    conn.close()
    
    return jsonify({"status":"success","messag":"ลบข้อมูลเรียนร้อย"})

if __name__ == '__main__':
    app.run(port=5000,debug=True)