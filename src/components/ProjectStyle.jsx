const ProjectStyle = () => {
  return (
    <>
      <section className="project-style-three centred">
        <div className="auto-container">
          <div className="sec-title-two">
            {/* <h2>Projects That Speaks Itself</h2> */}
          </div>
          <div className="sortable-masonry">
            <div className="filters">
              <ul className="filter-tabs filter-btns centred clearfix">
                <li
                  className="active filter"
                  data-role="button"
                  data-filter=".all"
                > 
                  {/* All Projects */}
                </li>
                {/* <li
                  className="filter"
                  data-role="button"
                  data-filter=".consulting"
                >
                  Consulting
                </li>
                <li
                  className="filter"
                  data-role="button"
                  data-filter=".startups"
                >
                  Startups
                </li>
                <li
                  className="filter"
                  data-role="button"
                  data-filter=".planning"
                >
                  Business Planning
                </li>
                <li
                  className="filter"
                  data-role="button"
                  data-filter=".marketing"
                >
                  Marketing
                </li> */}
              </ul>
            </div>
            {/* <div className="items-container row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all planning consulting startups">
                <div className="project-block-two">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="../src/assets/images/gallery/project-9.jpg"
                        alt=""
                      />
                      <a
                        href="../src/assets/images/gallery/project-9.jpg"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <i className="flaticon-plus-1" />
                      </a>
                    </figure>
                    <div className="content-box">
                      <h5>Thoughtful Solutions</h5>
                      <a href="index-5.html">Consulting</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all startups consulting planning">
                <div className="project-block-two">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="../src/assets/images/gallery/project-10.jpg"
                        alt=""
                      />
                      <a
                        href="../src/assets/images/gallery/project-10.jpg"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <i className="flaticon-plus-1" />
                      </a>
                    </figure>
                    <div className="content-box">
                      <h5>Thoughtful Solutions</h5>
                      <a href="index-5.html">Consulting</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all planning startups marketing">
                <div className="project-block-two">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="../src/assets/images/gallery/project-11.jpg"
                        alt=""
                      />
                      <a
                        href="../src/assets/images/gallery/project-11.jpg"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <i className="flaticon-plus-1" />
                      </a>
                    </figure>
                    <div className="content-box">
                      <h5>Thoughtful Solutions</h5>
                      <a href="index-5.html">Consulting</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all planning startups marketing">
                <div className="project-block-two">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="../src/assets/images/gallery/project-12.jpg"
                        alt=""
                      />
                      <a
                        href="../src/assets/images/gallery/project-12.jpg"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <i className="flaticon-plus-1" />
                      </a>
                    </figure>
                    <div className="content-box">
                      <h5>Thoughtful Solutions</h5>
                      <a href="index-5.html">Consulting</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all planning consulting startups">
                <div className="project-block-two">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="../src/assets/images/gallery/project-13.jpg"
                        alt=""
                      />
                      <a
                        href="../src/assets/images/gallery/project-13.jpg"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <i className="flaticon-plus-1" />
                      </a>
                    </figure>
                    <div className="content-box">
                      <h5>Thoughtful Solutions</h5>
                      <a href="index-5.html">Consulting</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all consulting planning marketing">
                <div className="project-block-two">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="../src/assets/images/gallery/project-14.jpg"
                        alt=""
                      />
                      <a
                        href="../src/assets/images/gallery/project-14.jpg"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <i className="flaticon-plus-1" />
                      </a>
                    </figure>
                    <div className="content-box">
                      <h5>Thoughtful Solutions</h5>
                      <a href="index-5.html">Consulting</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all planning startups marketing">
                <div className="project-block-two">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="../src/assets/images/gallery/project-15.jpg"
                        alt=""
                      />
                      <a
                        href="../src/assets/images/gallery/project-15.jpg"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <i className="flaticon-plus-1" />
                      </a>
                    </figure>
                    <div className="content-box">
                      <h5>Thoughtful Solutions</h5>
                      <a href="index-5.html">Consulting</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all consulting startups">
                <div className="project-block-two">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="../src/assets/images/gallery/project-16.jpg"
                        alt=""
                      />
                      <a
                        href="../src/assets/images/gallery/project-16.jpg"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <i className="flaticon-plus-1" />
                      </a>
                    </figure>
                    <div className="content-box">
                      <h5>Thoughtful Solutions</h5>
                      <a href="index-5.html">Consulting</a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          {/* <div className="more-btn">
            <a href="index-5.html" className="theme-btn">
              <i className="flaticon-waiting" />
              Load More
            </a>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ProjectStyle;
