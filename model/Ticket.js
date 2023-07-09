import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
  ticketData: {
    type: [{
      type: mongoose.Schema.Types.Mixed,
      required: true,
    }],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Ticket = mongoose.model("Ticket", TicketSchema);

export default Ticket;



