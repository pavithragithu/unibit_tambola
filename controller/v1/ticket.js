import Ticket from "../../model/Ticket.js";
import User from "../../model/User.js";
import { generateTambulaTickets } from "../../helper/index.js";

export const createTicket = async (req, res) => {
  try {
    const { numberOfTicketSet, userId } = req.body;

    if (numberOfTicketSet <= 0) {
      return res
        .status(400)
        .json({ error: "Number of tickets should be greater than 0" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // here we need to generate the random number for ticket and also tickets should be unique and save in database
    // as per requirement we need to create 1 set at a time with 6 unique tickets
    // so here i think i need to ask to user how many tickets of set  he want to create
    // Create ticket document
    for (let i = 0; i < numberOfTicketSet; i++) {
      const tickets = generateTambulaTickets();

    for (let [ticketId, data] of Object.entries(tickets)) {
        const ticketList = new Ticket({
          ticketData: data,
          user: user._id,
        });
        await ticketList.save();
      }
    }
    res.status(201).json({ message: "Ticket created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to create ticket" });
  }
};

export const fetchTickets = async (req, res) => {
  const userId = req.params.userId;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 6;

  try {
    // Get total count of tickets
    const totalCount = await Ticket.countDocuments({ user: userId });

    // Calculate pagination values
    const totalPages = Math.ceil(totalCount / limit);
    const skip = (page - 1) * limit;

    // Fetch ticket lists
    const tickets = await Ticket.find({ user: userId }).skip(skip).limit(limit);
    res.json({
      totalCount,
      totalPages,
      currentPage: page,
      tickets,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};


  
