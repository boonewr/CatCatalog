function About() {
    return (
        <div id="mainpagebody">
            <div id="leftbody">
                <h1 id="bodytitle">Cat Catalog</h1>
            </div>
            <div id="rightbody">
                <div id="bodycolumn">
                    <div className="content">
                        <div className="contenttitle">Who?</div>
                        Along the travels of my extensive walking career, I've come across many curious creatures. For instance: the many mischevious cats found in my own neighborhood...
                    </div>
                    <div className="content">
                        <div className="contenttitle">What?</div>
                        It's all cats. The local dogs are not very interesting.
                    </div>
                    <div className="content">
                        <div className="contenttitle">Where?</div>
                        {/* Note the changes needed for an iframe in JSX */}
                        <iframe
                            id="lpmap"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6450.111308860102!2d-79.84428192271719!3d36.067746592787344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88531bdd39408a47%3A0x5b2d4596d52bc1c!2sLindley%20Park%2C%20Greensboro%2C%20NC!5e0!3m2!1sen!2sus!4v1662237290288!5m2!1sen!2sus" // You'll need a proper embed URL
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className="content" id="lastcontent">
                        <div className="contenttitle">Why?</div>
                        To document the eclectic bunch of felines I find myself surrounded by.
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;