import { CatalogSect } from "./CatalogList.styled"
export const CatalogList = () => {
    return (
        <>
        <CatalogSect class="catalog section">
                <div class="container portfolio__container">
                    <h2 class="portfolio-title section-title" 
                        lang="en"
                    >
                        Portfilio or My Projects
                    </h2>
                    <ul class="card-set list">
                        <li class="card-set__item">
                            <video class="card-set__video"
                                src="http://techslides.com/demos/sample-videos/small.webm"
                                poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                                controls 
                                loop
                                preload="auto">
                            </video>
                            <p>
                                Since Material UI components are built to function in
                                isolation, they don't require any
                                kind of globally scoped styles.
                                For a better user experience and developer experience, we recommend
                                adding the following globals to your app.
                            </p>
                        </li>
                        <li class="card-set__item">
                            <video class="card-set__video"
                                src="http://techslides.com/demos/sample-videos/small.webm"
                                poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                                width="370" 
                                controls 
                                
                                loop
                                preload="auto">
                            </video>
                            <p>
                                Since Material UI components are built to function in
                                isolation, they don't require any
                                kind of globally scoped styles.
                                For a better user experience and developer experience, we recommend
                                adding the following globals to your app.
                            </p>
                        </li>
                        <li class="card-set__item">
                            <video class="card-set__video" 
                                src="http://techslides.com/demos/sample-videos/small.webm"
                                poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                                width="370" 
                                controls 
                                
                                loop
                                preload="auto">
                            </video>
                            <p>
                                Since Material UI components are built to function in
                                isolation, they don't require any
                                kind of globally scoped styles.
                                For a better user experience and developer experience, we recommend
                                adding the following globals to your app.
                            </p>
                        </li>
                        <li class="card-set__item">
                            <video class="card-set__video" 
                                src="http://techslides.com/demos/sample-videos/small.webm"
                                poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                                width="370" controls loop preload="auto"
                                >
                            </video>
                        </li>
                        <li class="card-set__item">
                            <video class="card-set__video"
                                src="http://techslides.com/demos/sample-videos/small.webm"
                                poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                                width="370" controls 
                                loop preload="auto">
                            </video>
                            <p>
                                Since Material UI components are built to function in
                                isolation, they don't require any
                                kind of globally scoped styles.
                                For a better user experience and developer experience, we recommend
                                adding the following globals to your app.
                            </p>
                        </li>
                        <li class="card-set__item">
                            <video class="card-set__video" 
                                src="http://techslides.com/demos/sample-videos/small.webm"
                                poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                                width="370" controls 
                                loop preload="auto">
                            </video>
                            <p>
                                Since Material UI components are built to function in
                                isolation, they don't require any
                                kind of globally scoped styles.
                                For a better user experience and developer experience, we recommend
                                adding the following globals to your app.
                            </p>
                        </li>
                    </ul>
                    <button data-modal-open type="button" class="portfolio__btn btn">
                        More
                    </button>
                </div>
            </CatalogSect>
        </>
    )
}