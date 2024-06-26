function payroll()
        {
            var p=document.getElementById("i3").value;
            p=parseInt(p);
            var da=p*57/100;
            var pf=p*(8.5)/100;
            var lip=document.getElementById("i13").value;
            var cca=document.getElementById("i10").value;
            var ea=document.getElementById("i9").value;
            var hra=document.getElementById("i7").value;
            var p=document.getElementById("i3").value;
            var hrr=document.getElementById("i11").value;
            
            if(p<6000)
                lip=250;
            else if(p>6000 && p<12000)
                 lip=500;
            else
                lip=750;
            if(p<3000)
                 cca=100;
            else if(p>3000 && p<6000)
                 cca=200;
            else
                 cca=300;
            if(p<5000)
			    ea=0;
		    else
			    ea=500;
		
		if(p<2500)
			     hra=p*5/100;
		else if(p>2500 && p<5000)
			    hra=p*7/100;
		else
			     hra=p*9/100;
        
         let  y=document.getElementById("i6");
        let n=document.getElementById("ii6");

        if(y.checked==true)
        {
           hra=0;
           hrr=hra;
        }
        if(n.checked==true)
        {
            hrr=hra;
        }
        p=parseInt(p);
        var gs,td,ns;
		 gs=p+da+hra+cca+ea;
         td=pf+hrr+lip;
         ns=gs-td;
        document.getElementById("i7").value=hra;
        document.getElementById("i8").value=da;
        document.getElementById("i9").value=ea;
        document.getElementById("i10").value=cca;
        document.getElementById("i11").value=hrr;
        document.getElementById("i12").value=pf;
        document.getElementById("i13").value=lip;
        document.getElementById("i14").value=gs;
        document.getElementById("i15").value=td;
        document.getElementById("i16").value=ns;

        return;
            
        }
        function cls()
        {
            alert("Calculation Ended...Thank U For Visiting....");
            return;
        }