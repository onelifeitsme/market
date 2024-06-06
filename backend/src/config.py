from dotenv import load_dotenv
import os
load_dotenv()

DB_URL = os.getenv("DB_URL")
DATABASE_URL_ASYNC = f"postgresql+asyncpg://{DB_URL}"