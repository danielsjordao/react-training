import road from "../assets/road.jpg"; 

const Images = () => {
    return (
        <div>
            <img src="/effect.jpg" alt="imageEffect" />
            <img src={road} alt="imageRoad" />

        </div>
    );        
};

export default Images;

