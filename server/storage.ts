import { 
  users, properties, agents, testimonials, contactMessages, newsletterSubscriptions,
  type User, type InsertUser, 
  type Property, type InsertProperty,
  type Agent, type InsertAgent,
  type Testimonial, type InsertTestimonial,
  type ContactMessage, type InsertContactMessage,
  type NewsletterSubscription, type InsertNewsletterSubscription
} from "@shared/schema";

// Placeholder schema for layout configurations.  Replace with your actual schema.
interface LayoutConfig {
  id: number;
  name: string;
  config: object;
  createdAt: Date;
  updatedAt?: Date;
}
interface InsertLayoutConfig {
  name: string;
  config: object;
}

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Property operations
  getAllProperties(): Promise<Property[]>;
  getProperty(id: number): Promise<Property | undefined>;
  getFeaturedProperties(): Promise<Property[]>;
  getRecentProperties(limit?: number): Promise<Property[]>;
  searchProperties(filters: Partial<Property>): Promise<Property[]>;
  createProperty(property: InsertProperty): Promise<Property>;

  // Agent operations
  getAllAgents(): Promise<Agent[]>;
  getAgent(id: number): Promise<Agent | undefined>;
  createAgent(agent: InsertAgent): Promise<Agent>;

  // Testimonial operations
  getAllTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;

  // Contact Message operations
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;

  // Newsletter operations
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;

  // Layout Configuration operations
  getAllLayoutConfigs(): Promise<LayoutConfig[]>;
  createLayoutConfig(config: InsertLayoutConfig): Promise<LayoutConfig>;
  updateLayoutConfig(id: number, config: InsertLayoutConfig): Promise<LayoutConfig>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private properties: Map<number, Property>;
  private agents: Map<number, Agent>;
  private testimonials: Map<number, Testimonial>;
  private contactMessages: Map<number, ContactMessage>;
  private newsletterSubscriptions: Map<number, NewsletterSubscription>;
  private layoutConfigs: Map<number, LayoutConfig>;

  private userCurrentId: number;
  private propertyCurrentId: number;
  private agentCurrentId: number;
  private testimonialCurrentId: number;
  private contactMessageCurrentId: number;
  private newsletterSubscriptionCurrentId: number;
  private layoutConfigCurrentId: number;

  constructor() {
    this.users = new Map();
    this.properties = new Map();
    this.agents = new Map();
    this.testimonials = new Map();
    this.contactMessages = new Map();
    this.newsletterSubscriptions = new Map();
    this.layoutConfigs = new Map();

    this.userCurrentId = 1;
    this.propertyCurrentId = 1;
    this.agentCurrentId = 1;
    this.testimonialCurrentId = 1;
    this.contactMessageCurrentId = 1;
    this.newsletterSubscriptionCurrentId = 1;
    this.layoutConfigCurrentId = 1;

    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    // This would be where we load initial data if needed
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Property operations
  async getAllProperties(): Promise<Property[]> {
    return Array.from(this.properties.values());
  }

  async getProperty(id: number): Promise<Property | undefined> {
    return this.properties.get(id);
  }

  async getFeaturedProperties(): Promise<Property[]> {
    return Array.from(this.properties.values()).filter(property => property.featured);
  }

  async getRecentProperties(limit: number = 3): Promise<Property[]> {
    return Array.from(this.properties.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, limit);
  }

  async searchProperties(filters: Partial<Property>): Promise<Property[]> {
    return Array.from(this.properties.values()).filter(property => {
      for (const [key, value] of Object.entries(filters)) {
        if (property[key as keyof Property] !== value) {
          return false;
        }
      }
      return true;
    });
  }

  async createProperty(insertProperty: InsertProperty): Promise<Property> {
    const id = this.propertyCurrentId++;
    const now = new Date();
    const property: Property = { 
      ...insertProperty, 
      id, 
      createdAt: now 
    };
    this.properties.set(id, property);
    return property;
  }

  async updateProperty(id: number, property: InsertProperty): Promise<Property> {
    const existingProperty = this.properties.get(id);
    if (!existingProperty) {
      throw new Error(`Property with ID ${id} not found`);
    }
    
    const updatedProperty: Property = { 
      ...existingProperty,
      ...property,
      id,
      updatedAt: new Date()
    };
    
    this.properties.set(id, updatedProperty);
    return updatedProperty;
  }

  async deleteProperty(id: number): Promise<void> {
    if (!this.properties.has(id)) {
      throw new Error(`Property with ID ${id} not found`);
    }
    this.properties.delete(id);
  }

    const id = this.propertyCurrentId++;
    const now = new Date();
    const property: Property = { 
      ...insertProperty, 
      id, 
      createdAt: now 
    };
    this.properties.set(id, property);
    return property;
  }

  // Agent operations
  async getAllAgents(): Promise<Agent[]> {
    return Array.from(this.agents.values());
  }

  async getAgent(id: number): Promise<Agent | undefined> {
    return this.agents.get(id);
  }

  async createAgent(insertAgent: InsertAgent): Promise<Agent> {
    const id = this.agentCurrentId++;
    const agent: Agent = { ...insertAgent, id };
    this.agents.set(id, agent);
    return agent;
  }

  // Testimonial operations
  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.testimonialCurrentId++;
    const testimonial: Testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  // Contact message operations
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.contactMessageCurrentId++;
    const now = new Date();
    const message: ContactMessage = { 
      ...insertMessage, 
      id, 
      createdAt: now 
    };
    this.contactMessages.set(id, message);
    return message;
  }

  // Newsletter operations
  async createNewsletterSubscription(insertSubscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    const id = this.newsletterSubscriptionCurrentId++;
    const now = new Date();
    const subscription: NewsletterSubscription = { 
      ...insertSubscription, 
      id, 
      createdAt: now 
    };
    this.newsletterSubscriptions.set(id, subscription);
    return subscription;
  }

  // Layout Configuration operations
  async getAllLayoutConfigs(): Promise<LayoutConfig[]> {
    return Array.from(this.layoutConfigs.values());
  }

  async createLayoutConfig(insertConfig: InsertLayoutConfig): Promise<LayoutConfig> {
    const id = this.layoutConfigCurrentId++;
    const now = new Date();
    const config: LayoutConfig = { ...insertConfig, id, createdAt: now };
    this.layoutConfigs.set(id, config);
    return config;
  }

  async updateLayoutConfig(id: number, insertConfig: InsertLayoutConfig): Promise<LayoutConfig> {
    const now = new Date();
    const existingConfig = this.layoutConfigs.get(id);
    if (!existingConfig) {
      throw new Error(`Layout config with ID ${id} not found`);
    }
    const updatedConfig: LayoutConfig = { ...existingConfig, ...insertConfig, updatedAt: now };
    this.layoutConfigs.set(id, updatedConfig);
    return updatedConfig;
  }
}

export const storage = new MemStorage();