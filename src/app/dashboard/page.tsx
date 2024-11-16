import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock data for demonstration purposes
const transactions = [
  {
    id: 1,
    date: "2023-05-01",
    description: "Salary",
    amount: 5000,
    type: "Income",
    category: "Salary",
  },
  {
    id: 2,
    date: "2023-05-02",
    description: "Rent",
    amount: -1500,
    type: "Expense",
    category: "Housing",
  },
  {
    id: 3,
    date: "2023-05-03",
    description: "Groceries",
    amount: -200,
    type: "Expense",
    category: "Food",
  },
  {
    id: 4,
    date: "2023-05-04",
    description: "Freelance Work",
    amount: 1000,
    type: "Income",
    category: "Side Hustle",
  },
  {
    id: 5,
    date: "2023-05-05",
    description: "Utilities",
    amount: -150,
    type: "Expense",
    category: "Bills",
  },
];

export default function Dashboard() {
  return (
    <div className="md:max-w-full">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,150.00</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Income</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$6,000.00</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,850.00</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,150.00</div>
          </CardContent>
        </Card>
      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Monthly Transactions</CardTitle>
          <div className="flex flex-wrap gap-2">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="may">May 2023</SelectItem>
                <SelectItem value="april">April 2023</SelectItem>
                <SelectItem value="march">March 2023</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Transaction type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="income">Income</SelectItem>
                <SelectItem value="expense">Expense</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="salary">Salary</SelectItem>
                <SelectItem value="housing">Housing</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="bills">Bills</SelectItem>
              </SelectContent>
            </Select>
            <Input className="w-[300px]" placeholder="Search transactions..." />
          </div>
        </CardHeader>
        <CardContent>
          <div className="w-full overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Category</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell
                      className={
                        transaction.amount > 0 ? "text-green-600" : "text-red-600"
                      }
                    >
                      {transaction.amount > 0 ? "+" : ""}
                      {transaction.amount.toFixed(2)}
                    </TableCell>
                    <TableCell>{transaction.type}</TableCell>
                    <TableCell>{transaction.category}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}