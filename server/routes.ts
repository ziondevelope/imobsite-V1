import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactMessageSchema, 
  insertNewsletterSubscriptionSchema,
  insertPropertySchema
} from "@shared/schema";
import { upload } from "./upload";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes prefix
  const apiPrefix = "/api";

  // Properties routes
  app.get(`${apiPrefix}/properties`, async (req, res) => {
    try {
      const properties = await storage.getAllProperties();
      res.json(properties);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch properties", error });
    }
  });

  app.get(`${apiPrefix}/properties/featured`, async (req, res) => {
    try {
      const featuredProperties = await storage.getFeaturedProperties();
      res.json(featuredProperties);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured properties", error });
    }
  });

  app.get(`${apiPrefix}/properties/recent`, async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 3;
      const recentProperties = await storage.getRecentProperties(limit);
      res.json(recentProperties);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch recent properties", error });
    }
  });

  app.get(`${apiPrefix}/properties/:id`, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid property ID" });
      }
      
      const property = await storage.getProperty(id);
      if (!property) {
        return res.status(404).json({ message: "Property not found" });
      }
      
      res.json(property);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch property", error });
    }
  });

  app.get(`${apiPrefix}/properties/search`, async (req, res) => {
    try {
      const filters: Record<string, any> = {};
      
      // Extract filters from query params
      if (req.query.type) filters.type = req.query.type;
      if (req.query.status) filters.status = req.query.status;
      if (req.query.city) filters.city = req.query.city;
      if (req.query.neighborhood) filters.neighborhood = req.query.neighborhood;
      if (req.query.minPrice) filters.minPrice = parseInt(req.query.minPrice as string);
      if (req.query.maxPrice) filters.maxPrice = parseInt(req.query.maxPrice as string);
      if (req.query.minBedrooms) filters.minBedrooms = parseInt(req.query.minBedrooms as string);
      
      const properties = await storage.searchProperties(filters);
      res.json(properties);
    } catch (error) {
      res.status(500).json({ message: "Failed to search properties", error });
    }
  });

  // Agents routes
  app.get(`${apiPrefix}/agents`, async (req, res) => {
    try {
      const agents = await storage.getAllAgents();
      res.json(agents);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch agents", error });
    }
  });

  app.get(`${apiPrefix}/agents/:id`, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid agent ID" });
      }
      
      const agent = await storage.getAgent(id);
      if (!agent) {
        return res.status(404).json({ message: "Agent not found" });
      }
      
      res.json(agent);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch agent", error });
    }
  });

  // Testimonials route
  app.get(`${apiPrefix}/testimonials`, async (req, res) => {
    try {
      const testimonials = await storage.getAllTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch testimonials", error });
    }
  });

  // Contact message route
  app.post(`${apiPrefix}/contact`, async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        return res.status(400).json({ 
          message: "Invalid contact message data", 
          errors: validatedData.error.format() 
        });
      }
      
      const message = await storage.createContactMessage(validatedData.data);
      res.status(201).json({ message: "Message sent successfully", id: message.id });
    } catch (error) {
      res.status(500).json({ message: "Failed to send message", error });
    }
  });

  // Newsletter subscription route
  app.post(`${apiPrefix}/newsletter`, async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        return res.status(400).json({ 
          message: "Invalid newsletter subscription data", 
          errors: validatedData.error.format() 
        });
      }

  // Property Management Routes
  app.post(`${apiPrefix}/properties`, async (req, res) => {
    try {
      const validatedData = insertPropertySchema.safeParse(req.body);
      
      if (!validatedData.success) {
        return res.status(400).json({ 
          message: "Dados do imóvel inválidos", 
          errors: validatedData.error.format() 
        });
      }
      
      const property = await storage.createProperty(validatedData.data);
      res.status(201).json(property);
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar imóvel", error });
    }
  });

  app.put(`${apiPrefix}/properties/:id`, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const validatedData = insertPropertySchema.safeParse(req.body);
      
      if (!validatedData.success) {
        return res.status(400).json({ 
          message: "Dados do imóvel inválidos", 
          errors: validatedData.error.format() 
        });
      }
      
      const property = await storage.updateProperty(id, validatedData.data);
      res.json(property);
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar imóvel", error });
    }
  });

  app.delete(`${apiPrefix}/properties/:id`, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteProperty(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar imóvel", error });
    }
  });

      
      const subscription = await storage.createNewsletterSubscription(validatedData.data);
      res.status(201).json({ message: "Subscription successful", id: subscription.id });
    } catch (error) {
      res.status(500).json({ message: "Failed to subscribe to newsletter", error });
    }
  });

  // Layout configuration routes
  // Admin routes
  app.get(`${apiPrefix}/admin/check`, async (req, res) => {
    // TODO: Implement proper admin check
    // For now, return ok
    res.json({ isAdmin: true });
  });

  app.get(`${apiPrefix}/admin/stats`, async (req, res) => {
    try {
      const properties = await storage.getAllProperties();
      const agents = await storage.getAllAgents();
      const messages = await storage.getAllContactMessages();

      res.json({
        totalProperties: properties.length,
        totalAgents: agents.length,
        totalMessages: messages.length
      });
    } catch (error) {
      res.status(500).json({ message: "Error fetching admin stats", error });
    }
  });

  app.get(`${apiPrefix}/layout-config`, async (req, res) => {
    try {
      const configs = await storage.getAllLayoutConfigs();
      res.json(configs);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch layout configs", error });
    }
  });

  app.post(`${apiPrefix}/layout-config`, async (req, res) => {
    try {
      const validatedData = insertLayoutConfigSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        return res.status(400).json({ 
          message: "Invalid layout config data", 
          errors: validatedData.error.format() 
        });
      }
      
      const config = await storage.createLayoutConfig(validatedData.data);
      res.status(201).json(config);
    } catch (error) {
      res.status(500).json({ message: "Failed to create layout config", error });
    }
  });

  app.put(`${apiPrefix}/layout-config/:id`, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const validatedData = insertLayoutConfigSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        return res.status(400).json({ 
          message: "Invalid layout config data", 
          errors: validatedData.error.format() 
        });
      }
      
      const config = await storage.updateLayoutConfig(id, validatedData.data);
      res.json(config);
    } catch (error) {
      res.status(500).json({ message: "Failed to update layout config", error });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
