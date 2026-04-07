import { MessageCircle } from "lucide-react";

interface BookingButtonsProps {
  variant?: "default" | "compact";
  className?: string;
}

const BookingButtons = ({ variant = "default", className = "" }: BookingButtonsProps) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <a
        href="https://www.phorest.com/salon/changesclinicltd/book/service-selection?showSpecialOffers=false"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center bg-primary text-primary-foreground font-heading text-sm font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
      >
        Book Portsmouth
      </a>
      <a
        href="https://online-booking.semble.io/?token=776ba6c2349bd34908aa804f02bd163d3e00a325"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center bg-primary text-primary-foreground font-heading text-sm font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
      >
        Book Southampton
      </a>
      <a
        href="https://online-booking.semble.io/?token=c3a3601daa9cb78bb4dccc6798ec2d7d2af0b700"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center bg-primary text-primary-foreground font-heading text-sm font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
      >
        Book Chichester
      </a>
      <a
        href="https://wa.me/447725489074"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-heading text-sm font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
      >
        <MessageCircle className="w-4 h-4" /> WhatsApp Us
      </a>
    </div>
  );
};

export default BookingButtons;
