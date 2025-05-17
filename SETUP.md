# Setup Documentation

> Make sure you have Python and PostgreSQL installed.

### 1. Clone repository

```
git clone <insert-github-repo-url>
cd planit-app
```

### 2. Set up a virtual environment

```
python -m venv venv
```

MacOS: `source venv/bin/activate` <br>
Windows: `venv\Scripts\activate`

### 3. Install required packages

```
pip install -r requirements.txt
```

### 4. Configure your environment variables

```
touch .env
```

Or right-click on the explorer panel on VS Code, create a new file and type ".env". Make sure you are creating the file at the root the project repo.

Copy the environment variables from [`.envexample`](.envexample) to your own local `.env` file.

### 5. Set up your PostgreSQL database

> Make sure you have PostgreSQL installed and running.

#### If you're using PostgreSQL command line interface

---

1. Open your terminal and log in to PostgreSQL.

```
psql -U postgres
```

If you have a different username, replace `postgres`.

2. Create a new database.

```
CREATE DATABASE planit_db;
```

3. (Optional) Create a user with a password:

```
CREATE USER planit_user WITH PASSWORD 'your_password';
```

4. Grant privileges to the user:

```
GRANT ALL PRIVILEGES ON DATABASE planit_db TO planit_user;
```

5. Exist the `psql` prompt:

```
\q
```

6. Update your `.env` file with your PostgreSQL credentials:

```
DB_USER=planit_user
DB_PASSWORD=your_password
DB_NAME=planit_db
```

7. Run your app with Flask to create tables and get started.

#### If you're using pgAdmin GUI

---

1. Open pgAdmin and log in.
2. In the left sidebar:
   - Right-click on "Databases"
   - Select "Create" → "Database…"
3. Within the pop-up window:
   - Enter a name for your database (e.g., `planit_db`)
   - Click "Save"
4. Update your `.env` file to match.
5. Return to your terminal to run the Flask app.

### 6. Run the Flask app

```
python app.py
```

Depending on your step, you may be prompted a link automatically within your terminal to see the app live!

```
Running on http://127.0.0.1:5000
# 5000 or your custom port number
```

### 7. Close the Flask app

- To close the app, use `CMD + C` (Mac) or `CTRL + C` (Windows).
- Deactivate the virtual environment by typing `deactivate` in the terminal.

##### [Return to top](#stretch-features)
