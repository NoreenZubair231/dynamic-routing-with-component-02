
import "./globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
        <h1>Country List</h1>
        <ul className="d-flex">
          
          <li className="cust_button"><Link className="" href="/country/pakistan">Pakistan</Link></li>

          <li className="cust_button"><Link className="" href="/country/india">India</Link></li>

          <li className="cust_button"><Link className="" href="/country/japan">Japan</Link></li>

          <li className="cust_button"><Link className="" href="/country/saudia">Saudia</Link></li>

          <li className="cust_button"><Link className="" href="/country/turkey">Turkey</Link></li>

          <li className="cust_button"><Link className="" href="/country/iran">Iran</Link></li>

        </ul>
    </div>
  );
}
