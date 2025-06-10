import Container from "@/components/Container";

function Partners() {
    return (
        <Container className="py-24">
            <div className="text-3xl font-semibold text-center">
                Наши партнеры
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="bg-white rounded-lg h-32 flex justify-center items-center">
                    <img src={'/plasma.png'} className="h-20 w-auto" />
                </div>
                <div className="bg-white rounded-lg h-32 flex justify-center items-center">
                    <img src={'/amanzholov.svg'} className="h-20 w-auto" />

                </div>
                <div className="bg-white rounded-lg h-32 flex justify-center items-center">
                    <img src={'/aitu.svg'} className="h-20 w-auto" />

                </div>
            </div>
        </Container>
    );
}

export default Partners;