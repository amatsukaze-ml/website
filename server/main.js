require("./scripts/globals")();
(new (require("./shimakaze"))).Start(Config.port || 4545);