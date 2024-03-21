const HeroComponent = () => {

    return (
        <>
            <main className="hero Container">
                <div className="hero-content">
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. </p>

                    <div className="hero-btn">
                        <button>Shop Now</button>
                        <button className="second-btn">Categories</button>
                    </div>
                    <div className="shopping">
                        <p>Also Available On</p>
                        <div className="brand-icons">
                            <img src="/images/amazon.png" alt="amazon" />
                            <img src="/images/flipkart.png" alt="flipkart" />
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/images/shoes1.png" alt="" />
                </div>
            </main>
        </>
    )
}

export default HeroComponent