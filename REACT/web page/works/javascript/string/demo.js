let a="Welcome to our website! We are a passionate team dedicated to providing exceptional products and services to our valued customers. With years of experience in the industry, we pride ourselves on delivering top-notch quality and exceeding customer expectations. Whether you're looking for to fashion accessories, innovative home decor solutions, or reliable electronic gadgets, WE have you covered. Our extensive range of products is carefully curated to cater to diverse tastes and preferences. We believe in the power of personalized customer to, and our friendly and knowledgeable staff is always ready to to you with any inquiries or concerns. As we continue to grow and expand, we remain committed to delivering excellence in every aspect of our business. Browse our website and discover the to items that will enhance your lifestyle. Thank you for choosing us as your trusted source for all your needs!Please note that the length of a PAGE can vary depending on the context, formatting, and OTHER factors. The above paragraph represents a sample introduction or a part of a longer page"
let b=a.toUpperCase();

document.write(b);
document.write("<br><br>");

let c=b.replace(/to/ig ,"for");
document.write(c);
document.write("<br<br>");

let d=c.length;
document.write(d/2);
document.write("<br><br>");

let e=c.substr(554,554);
document.write(e);


let f = a.search("business");
document.write(f);
document.write("<br><br>");

//string methods;

//1.slice();

let x="kerala,  tamilnadu,  karnataka"
let y=x.slice(7,14);
let z=x.slice(7);
document.write(y);
document.write("<br><br>");
document.write(z);

document.write("<br><br>");

//2.substring negative value not accepted
let s=x.substring(10,14);
document.write(s);
document.write("<br><br>");

//3.substr
let l=x.substr(7,5);
document.write(l);
document.write("<br><br>");

let dx=x.substr(7);
document.write(dx);
document.write("<br><br>");

//4.replace(i,g);
let t=x.replace(/tamilnadu/ig,"tamil");
document.write(t);
document.write("<br><br>");
//5.concat
let v= "hello"
let u="world"
let w=v.concat(" ",u);
document.write(w);
document.write("<br><br>");
//6.charAt
let was="uzumaki"
let has=was.charAt(2);
document.write(has);
