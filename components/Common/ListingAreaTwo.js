import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const ListingAreaTwo = ({
	bgColor,
	listings,
}) => {
	return (
		<>
			<section
				className={`listings-area ptb-100 ${bgColor}`}
			>
				<div className="container">
					<div className="section-title">
						<h2>Most Visited Listings</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur
							adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua.
							Quis ipsum suspendisse ultrices gravida. Risus
							commodo viverra.
						</p>
					</div>

					<div className="row">
						{listings &&
							listings.map(
								(list) =>
									list.status === "active" && (
										<div
											className="col-xl-4 col-lg-6 col-md-6"
											key={list.id}
										>
											<div className="single-listings-box">
												<div className="listings-image">
													<Swiper 
														loop={true}
														navigation={true} 
														modules={[Navigation]} 
														className="listings-image-slides"
													>
														{list.gallery .length > 0 && list.gallery.map(
															( gal, i ) => (
																<SwiperSlide key={i}>
																	<div className="single-image">
																		<img
																			src={gal.replace(
																				/^http:\/\//i,
																				"https://"
																			)}
																			alt="image"
																		/>
																		<Link
																			href={`/listing/${list.id}`}
																		>
																			<a className="link-btn"></a>
																		</Link>
																	</div>
																</SwiperSlide>
															)
														)}
													</Swiper>

													<a
														href="#"
														className="bookmark-save"
													>
														<i className="flaticon-heart"></i>
													</a>
													<a
														href="#"
														className="category"
													>
														<i className="flaticon-cooking"></i>
													</a>
												</div>

												<div className="listings-content">
													<div className="author">
														<div className="d-flex align-items-center">
															<img
																src="/images/user4.jpg"
																alt="image"
															/>
															<span>Admin</span>
														</div>
													</div>
													<ul className="listings-meta">
														<li>
															<a href="#">
																<i className="flaticon-cleansing"></i>{" "}
																{list.category}
															</a>
														</li>
														<li>
															<a href="#">
																<i className="flaticon-pin"></i> {list.address}
															</a>
														</li>
													</ul>
													<h3>
														<Link
															href={`/listing/${list.id}`}
														>
															<a>
																{
																	list.listingTitle
																}
															</a>
														</Link>
													</h3>

													<span className="status">
														<i className="flaticon-save"></i>{" "}
														Open Now
													</span>

													<div className="d-flex align-items-center justify-content-between">
														<div className="rating">
															<i className="bx bxs-star"></i>
															<i className="bx bxs-star"></i>
															<i className="bx bxs-star"></i>
															<i className="bx bx-star"></i>
															<i className="bx bx-star"></i>
															<span className="count">
																(15)
															</span>
														</div>

														<div className="price">
															Start From{" "}
															<span>
																${list.pricing}
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									)
							)}
 
						<div className="col-xl-12 col-lg-12 col-md-12">
							<div className="more-listings-box">
								<Link href="/listings">
									<a className="default-btn">
										More Listings
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ListingAreaTwo;
