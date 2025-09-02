type TicketStatus = "PENDING" | "IN_PROGRESS" | "COMPLETE";
interface Category {
  id: number;
  name: string;
  basePrice: number;
}
interface Client {
  id: number;
  username: string;
}
interface Tech {
  id: number;
  username: string;
  email: string;
}
export interface TicketResponseInterface {
  id: number;
  title: string;
  description: string;
  status: TicketStatus;
  clientId: number;
  techId: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  client: Client;
  tech: Tech;
  category: Category;
}
