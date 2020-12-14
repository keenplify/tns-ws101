 function addproduct(){
            var qtyvalue= document.getElementById('displayqty').innerHTML;
            qtyvalue++;
            document.getElementById('displayqty').innerHTML = qtyvalue;
        }
        function subproduct(){
            var qtyvalue= document.getElementById('displayqty').innerHTML;
            qtyvalue--;
            document.getElementById('displayqty').innerHTML = qtyvalue;
        }    
        function clearproduct(){
            var qtyvalue= document.getElementById('displayqty').innerHTML;
            qtyvalue=0;
            document.getElementById('displayqty').innerHTML = qtyvalue;
        }