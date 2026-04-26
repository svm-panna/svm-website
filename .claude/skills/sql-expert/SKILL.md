---
name: sql-expert
description: PostgreSQL, MySQL, SQLite, 및 SQL Server를 지원하는 전문가 수준의 SQL 쿼리 작성, 최적화 및 데이터베이스 스키마 설계입니다. 데이터베이스 작업 시 다음을 위해 사용하세요: (1) JOIN, 서브쿼리, 윈도우 함수를 포함한 복잡한 SQL 쿼리 작성, (2) 느린 쿼리 최적화 및 실행 계획 분석, (3) 올바른 정규화를 적용한 데이터베이스 스키마 설계, (4) 인덱스 생성 및 쿼리 성능 개선, (5) 마이그레이션 작성 및 스키마 변경 처리, (6) SQL 에러 및 쿼리 문제 디버깅
---

# SQL Expert Skill

PostgreSQL, MySQL, SQLite 및 SQL Server 전반에 걸친 SQL 데이터베이스의 작성, 최적화 및 관리를 위한 전문가 가이드입니다.

## 핵심 역량 (Core Capabilities)

이 SKILL을 통해 다음을 수행할 수 있습니다:

- JOIN, 서브쿼리, CTE 및 윈도우 함수를 포함한 **복잡한 SQL 쿼리 작성**
- EXPLAIN 실행 계획 및 인덱스 권장 사항을 활용한 **느린 쿼리 최적화**
- 올바른 정규화(1NF, 2NF, 3NF, BCNF)를 적용한 **데이터베이스 스키마 설계**
- 쿼리 성능을 위한 **효과적인 인덱스 생성**
- 롤백 지원을 포함한 안전한 **데이터베이스 마이그레이션 작성**
- **SQL 에러 디버깅** 및 에러 메시지 해석
- 적절한 격리 수준(isolation levels)을 적용한 **트랜잭션 처리**
- **JSON/JSONB** 데이터 타입 활용
- 테스트를 위한 **샘플 데이터 생성**
- **데이터베이스 다이얼렉트 간 변환** (PostgreSQL ↔ MySQL ↔ SQLite)

---

## 지원하는 데이터베이스 시스템 (Supported Database Systems)

### PostgreSQL
**적합한 사례**: 복잡한 쿼리, JSON 데이터, 고급 기능, ACID 준수

```bash
pip install psycopg2-binary sqlalchemy
```

### MySQL/MariaDB
**적합한 사례**: 웹 애플리케이션, WordPress, 읽기 비중이 높은 워크로드

```bash
pip install mysql-connector-python sqlalchemy
```

### SQLite
**적합한 사례**: 로컬 개발, 임베디드 데이터베이스, 테스트

```bash
pip install sqlite3  # Python 내장
```

### SQL Server
**적합한 사례**: 엔터프라이즈 애플리케이션, Windows 환경

```bash
pip install pyodbc sqlalchemy
```

---

## 쿼리 작성 (Query Writing)

### JOIN을 포함한 기본 SELECT

```sql
-- 필터링이 포함된 단순 SELECT
SELECT
    column1,
    column2,
    column3
FROM
    table_name
WHERE
    condition = 'value'
    AND another_condition > 100
ORDER BY
    column1 DESC
LIMIT 10;

-- INNER JOIN
SELECT
    users.name,
    orders.order_date,
    orders.total_amount
FROM
    users
INNER JOIN
    orders ON users.id = orders.user_id
WHERE
    orders.status = 'completed';

-- LEFT JOIN (주문이 없는 사용자를 포함하여 모두 조회)
SELECT
    users.name,
    COUNT(orders.id) as order_count,
    COALESCE(SUM(orders.total_amount), 0) as total_spent
FROM
    users
LEFT JOIN
    orders ON users.id = orders.user_id
GROUP BY
    users.id, users.name;
```

### 서브쿼리 및 CTE (Common Table Expression)

```sql
-- WHERE 절의 서브쿼리
SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- CTE (가독성 향상을 위해 권장)
WITH high_value_customers AS (
    SELECT
        user_id,
        SUM(total_amount) as lifetime_value
    FROM orders
    GROUP BY user_id
    HAVING SUM(total_amount) > 1000
)
SELECT
    users.name,
    users.email,
    hvc.lifetime_value
FROM users
INNER JOIN high_value_customers hvc ON users.id = hvc.user_id;
```

### 윈도우 함수 (Window Functions)

```sql
-- 그룹 내 순위 지정
SELECT
    name,
    department,
    salary,
    ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) as salary_rank
FROM
    employees;

-- 누계 (Running totals)
SELECT
    order_date,
    total_amount,
    SUM(total_amount) OVER (ORDER BY order_date) as running_total
FROM
    orders;

-- 이동 평균 (Moving averages)
SELECT
    order_date,
    total_amount,
    AVG(total_amount) OVER (
        ORDER BY order_date
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) as moving_avg_7days
FROM
    daily_sales;
```

더 복잡한 쿼리 패턴은 `examples/complex_queries.sql`을 참조하세요.

---

## 쿼리 최적화 (Query Optimization)

### EXPLAIN 활용

```sql
-- 쿼리 성능 분석
EXPLAIN ANALYZE
SELECT
    users.name,
    COUNT(orders.id) as order_count
FROM users
LEFT JOIN orders ON users.id = orders.user_id
GROUP BY users.id, users.name;

-- 확인할 내용:
-- - Seq Scan (나쁨) vs Index Scan (좋음)
-- - 높은 비용(cost) 수치
-- - 처리되는 대량의 행 수(row counts)
```

### 빠른 최적화 팁

```sql
-- 나쁨: 인덱스 컬럼에 함수 사용
SELECT * FROM users WHERE LOWER(email) = 'user@example.com';

-- 좋음: 인덱스 컬럼을 가공하지 않음
SELECT * FROM users WHERE email = LOWER('user@example.com');

-- 나쁨: SELECT * 사용
SELECT * FROM large_table WHERE id = 123;

-- 좋음: 필요한 컬럼만 선택
SELECT id, name, email FROM large_table WHERE id = 123;
```

포괄적인 최적화 기법은 `references/query-optimization.md`를 참조하세요.

---

## 스키마 설계 (Schema Design)

### 정규화 원칙 (Normalization Principles)

**제1정규형 (1NF)**: 반복되는 그룹 제거, 원자성(atomic) 확보

```sql
-- 좋음: 주문 항목을 위한 별도 테이블 구성
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_name VARCHAR(100)
);

CREATE TABLE order_items (
    order_item_id INT PRIMARY KEY,
    order_id INT REFERENCES orders(order_id),
    product_name VARCHAR(100)
);
```

**제2정규형 (2NF)**: 기본키가 아닌 모든 속성이 기본키 전체에 의존해야 함

```sql
-- 좋음: 제품 정보를 분리하여 관리
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    product_price DECIMAL(10, 2)
);

CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);
```

**제3정규형 (3NF)**: 이행적 종속성(transitive dependency)이 없어야 함

### 일반적인 스키마 패턴

**일대다 (One-to-Many):**

```sql
CREATE TABLE authors (
    author_id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
);

CREATE TABLE books (
    book_id INT PRIMARY KEY,
    title VARCHAR(200),
    author_id INT NOT NULL,
    published_date DATE,
    FOREIGN KEY (author_id) REFERENCES authors(author_id)
);
```

**다대다 (Many-to-Many):**

```sql
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(100)
);

-- 교차(Junction) 테이블
CREATE TABLE enrollments (
    enrollment_id INT PRIMARY KEY,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    enrollment_date DATE,
    grade CHAR(2),
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id),
    UNIQUE (student_id, course_id)
);
```

더 많은 스키마 패턴은 `examples/schema_examples.sql`을 참조하세요.

---

## 인덱스 및 성능 (Indexes and Performance)

### 인덱스 생성

```sql
-- 단일 컬럼 인덱스
CREATE INDEX idx_users_email ON users(email);

-- 복합 인덱스 (컬럼 순서가 중요합니다!)
CREATE INDEX idx_orders_user_date ON orders(user_id, order_date);

-- 고유 인덱스
CREATE UNIQUE INDEX idx_users_username ON users(username);

-- 부분 인덱스 (PostgreSQL)
CREATE INDEX idx_active_users ON users(email) WHERE status = 'active';
```

### 인덱스 가이드라인

**인덱스가 필요한 경우:**
- ✅ WHERE 절에 사용되는 컬럼
- ✅ JOIN 조건에 사용되는 컬럼
- ✅ ORDER BY에 사용되는 컬럼
- ✅ 외래 키(Foreign key) 컬럼

**인덱스를 피해야 하는 경우:**
- ❌ 아주 작은 테이블 (< 1000행)
- ❌ 선택도(selectivity)가 낮은 컬럼 (예: boolean 필드)
- ❌ 업데이트가 매우 빈번한 컬럼

상세한 인덱스 전략은 `references/indexes-performance.md`를 참조하세요.

---

## 마이그레이션 (Migrations)

### 안전한 마이그레이션 패턴

```sql
-- 1단계: nullable 컬럼으로 추가
ALTER TABLE users ADD COLUMN status VARCHAR(20);

-- 2단계: 기존 데이터 채우기
UPDATE users SET status = 'active' WHERE status IS NULL;

-- 3단계: NOT NULL 제약 조건 부여
ALTER TABLE users ALTER COLUMN status SET NOT NULL;

-- 4단계: 새 행을 위한 기본값 설정
ALTER TABLE users ALTER COLUMN status SET DEFAULT 'active';

-- 롤백 계획
ALTER TABLE users DROP COLUMN status;
```

### 무중단 마이그레이션 (Zero-Downtime Migrations)

```sql
-- 좋음: 컬럼을 먼저 nullable로 추가한 뒤 데이터 채움
ALTER TABLE large_table ADD COLUMN new_column VARCHAR(100);

-- 대량 업데이트는 배치(batch) 단위로 수행
UPDATE large_table SET new_column = 'value' WHERE new_column IS NULL LIMIT 1000;
-- 완료될 때까지 반복

-- 그 다음 NOT NULL 설정
ALTER TABLE large_table ALTER COLUMN new_column SET NOT NULL;
```

추가 마이그레이션 패턴은 `examples/migrations.sql`을 참조하세요.

---

## 고급 패턴 (Advanced Patterns)

### UPSERT (Insert or Update)

```sql
-- PostgreSQL
INSERT INTO users (user_id, name, email, updated_at)
VALUES (1, 'John Doe', 'john@example.com', NOW())
ON CONFLICT (user_id)
DO UPDATE SET
    name = EXCLUDED.name,
    email = EXCLUDED.email,
    updated_at = NOW();

-- MySQL
INSERT INTO users (user_id, name, email, updated_at)
VALUES (1, 'John Doe', 'john@example.com', NOW())
ON DUPLICATE KEY UPDATE
    name = VALUES(name),
    email = VALUES(email),
    updated_at = NOW();
```

### 재귀 CTE (Recursive CTEs)

```sql
-- 계층형 데이터 탐색
WITH RECURSIVE employee_hierarchy AS (
    -- Anchor: 최상위 직원
    SELECT id, name, manager_id, 1 as level
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    -- Recursive: 이전 레벨에 보고하는 직원들
    SELECT e.id, e.name, e.manager_id, eh.level + 1
    FROM employees e
    INNER JOIN employee_hierarchy eh ON e.manager_id = eh.id
)
SELECT * FROM employee_hierarchy ORDER BY level, name;
```

피벗 테이블, JSON 작업 및 벌크 작업을 포함한 고급 패턴은 `references/advanced-patterns.md`를 참조하세요.

---

## 모범 사례 (Best Practices)

### 핵심 원칙

1. **항상 파라미터화된 쿼리를 사용**하여 SQL 인젝션을 방지하세요.
2. **연관된 작업은 트랜잭션을 사용**하여 원자성을 보장하세요.
3. **적절한 제약 조건을 추가**하세요 (PRIMARY KEY, FOREIGN KEY, NOT NULL, CHECK).
4. **타임스탬프 컬럼** (created_at, updated_at)을 테이블에 포함하세요.
5. 테이블과 컬럼에 **의미 있는 이름**을 지으세요.
6. **SELECT * 을 지양**하고 필요한 컬럼만 명시하세요.
7. 조인 성능을 위해 **외래 키에 인덱스**를 고려하세요.
8. 가변 길이 문자열에는 CHAR 대신 **VARCHAR**를 사용하세요.
9. IS NULL / IS NOT NULL을 사용하여 **NULL 값을 적절히 처리**하세요.
10. **적절한 데이터 타입**을 사용하세요 (금액은 FLOAT가 아닌 DECIMAL 권장).

모범 사례 적용 예시:

```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    user_id INT NOT NULL,
    order_date DATE NOT NULL DEFAULT CURRENT_DATE,
    total_amount DECIMAL(10, 2) CHECK (total_amount >= 0),
    status VARCHAR(20) CHECK (status IN ('pending', 'completed', 'cancelled')),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
```

포괄적인 모범 사례는 `references/best-practices.md`를 참조하세요.

---

## 자주 발생하는 문제 (Common Pitfalls)

다음을 주의하세요:

1. **N+1 쿼리 문제** - 쿼리가 반복문 안에서 실행되지 않도록 JOIN을 활용하세요.
2. **LIMIT 부재** - 큰 테이블 탐색 시 LIMIT을 잊지 마세요.
3. **암시적 타입 변환** - 타입 불일치는 인덱스 사용을 방해할 수 있습니다.
4. **EXISTS 대신 COUNT(*) 사용** - 존재 여부만 확인할 때는 EXISTS가 효율적입니다.
5. **NULL 처리 실수** (NULL = NULL은 TRUE가 아니라 NULL입니다).
6. **임시방편으로 SELECT DISTINCT 사용** - 쿼리의 근본적인 원인을 고치는 대신 DISTINCT로 중복만 가리는 것은 위험합니다.
7. **연관 작업에서의 트랜잭션 누락**.
8. **인덱스 컬럼 가공** - 인덱스 컬럼에 함수를 씌우면 인덱스를 탈 수 없습니다.

예시 - N+1 문제 피하기:

```python
# 나쁨: N+1 쿼리
users = db.query("SELECT * FROM users")
for user in users:
    orders = db.query("SELECT * FROM orders WHERE user_id = ?", user.id)

# 좋음: JOIN을 이용한 단일 쿼리
result = db.query("""
    SELECT users.*, orders.*
    FROM users
    LEFT JOIN orders ON users.id = orders.user_id
""")
```

문제 해결 방법의 전체 목록은 `references/common-pitfalls.md`를 참조하세요.

---

## 헬퍼 스크립트 및 예시

### 활용 가능 리소스

**헬퍼 스크립트** (`scripts/`):
- `sql_helper.py` - 쿼리 빌딩, 스키마 내성 조사(introspection), 인덱스 분석 및 마이그레이션 보조 유틸리티

**예시** (`examples/`):
- `complex_queries.sql` - CTE, 윈도우 함수, 서브쿼리를 활용한 고급 쿼리 패턴
- `schema_examples.sql` - 다양한 유스케이스를 위한 전체 스키마 설계 예시
- `migrations.sql` - 안전한 마이그레이션 패턴 및 무중단 기법

**참조 문서** (`references/`):
- `query-optimization.md` - 포괄적인 쿼리 최적화 기법 및 EXPLAIN 분석
- `indexes-performance.md` - 상세 인덱스 전략, 유지보수 및 모니터링
- `advanced-patterns.md` - UPSERT, 벌크 작업, 피벗 테이블, JSON 작업, 재귀 쿼리
- `best-practices.md` - 전체 SQL 모범 사례 가이드
- `common-pitfalls.md` - 일반적인 실수와 방지 방법

### 빠른 시작 가이드

1. 기본 쿼리는 위에서 보여준 패턴을 사용하세요.
2. 최적화가 필요한 경우 EXPLAIN으로 시작하고 `references/query-optimization.md`를 확인하세요.
3. 스키마 설계 시 정규화 패턴을 검토하고 `examples/schema_examples.sql`을 참조하세요.
4. 복잡한 시나리오는 `references/advanced-patterns.md`를 확인하세요.
5. 유틸리티가 필요한 경우 `scripts/sql_helper.py`를 활용하세요.

---

## 워크플로우 (Workflow)

SQL 데이터베이스 작업 시:

1. **요구 사항 파악** - 어떤 데이터를 조회하거나 저장해야 하는가?
2. **스키마 설계** - 정규화 적용 및 적절한 데이터 타입 선택
3. **인덱스 생성** - 외래 키 및 자주 조회되는 컬럼 인덱싱
4. **쿼리 작성** - 단순하게 시작하여 필요에 따라 복잡도 추가
5. **최적화** - EXPLAIN을 사용하여 병목 지점 식별
6. **테스트** - 샘플 데이터 및 에지 케이스(edge cases) 검증
7. **문서화** - 복잡한 쿼리에는 주석 추가

마이그레이션 시:
1. **변경 계획 수립** - 영향을 받는 테이블과 의존성 식별
2. **마이그레이션 작성** - Up/Down 마이그레이션 모두 작성
3. **복사본 테스트** - 개발용 데이터베이스에서 먼저 테스트
4. **백업** - 항상 마이그레이션 실행 전 백업 수행
5. **실행** - 트래픽이 적은 시간에 실행
6. **검증** - 실행 후 데이터 무결성 확인
