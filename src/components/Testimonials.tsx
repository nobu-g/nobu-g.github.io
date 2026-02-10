import { Component } from "react";

interface Testimonial {
  user: string;
  text: string;
}

interface TestimonialsProps {
  data?: {
    testimonials: Testimonial[];
  };
}

class Testimonials extends Component<TestimonialsProps> {
  render() {
    let testimonials: React.JSX.Element[] | undefined;
    if (this.props.data) {
      testimonials = this.props.data.testimonials.map((testimonials) => (
        <li key={testimonials.user}>
          <blockquote>
            <p>{testimonials.text}</p>
            <cite>{testimonials.user}</cite>
          </blockquote>
        </li>
      ));
    }

    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Client Testimonials</span>
              </h1>
            </div>

            <div className="ten columns flex-container">
              <ul className="slides">{testimonials}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
