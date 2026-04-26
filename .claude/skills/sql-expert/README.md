# SQL Expert Skill

PostgreSQL, MySQL, SQLite, 및 SQL Server를 지원하는 전문가 수준의 SQL 쿼리 작성, 최적화 및 데이터베이스 스키마 설계입니다.

## 개요 (Overview)

SQL 데이터베이스 작성, 최적화 및 관리를 위한 전문가 가이드입니다. 이 SKILL은 JOIN 및 윈도우 함수를 포함한 복잡한 쿼리, EXPLAIN 실행 계획을 활용한 쿼리 최적화, 올바른 정규화를 적용한 데이터베이스 스키마 설계, 성능을 위한 인덱스 생성, 안전한 마이그레이션 및 SQL 디버깅을 다룹니다.

## 설치 (Installation)

대상 데이터베이스에 맞는 데이터베이스 드라이버를 설치하세요:

```bash
# PostgreSQL
pip install psycopg2-binary sqlalchemy

# MySQL/MariaDB
pip install mysql-connector-python sqlalchemy

# SQLite (Python 내장)
pip install sqlite3

# SQL Server
pip install pyodbc sqlalchemy
```

## 포함 내용 (What's Included)

### SKILL.md
SQL 쿼리 작성, 최적화 기법, 정규화를 포함한 스키마 설계, 인덱스 전략, 마이그레이션 패턴, 고급 패턴(CTE, 윈도우 함수, 재귀 쿼리), 모범 사례 및 자주 발생하는 문제를 다루는 포괄적인 가이드입니다.

### scripts/
- `sql_helper.py` - 다음을 위한 유틸리티 함수:
  - 쿼리 빌딩 및 파라미터화
  - 스키마 내성 조사(introspection)
  - 인덱스 분석 및 추천
  - 마이그레이션 헬퍼

### examples/
- `complex_queries.sql` - CTE, 윈도우 함수, 서브쿼리를 활용한 고급 쿼리 패턴
- `schema_examples.sql` - 다양한 유스케이스를 위한 전체 스키마 설계 예시
- `migrations.sql` - 안전한 마이그레이션 패턴 및 무중단 기법

### references/
- `query-optimization.md` - 포괄적인 최적화 기법 및 EXPLAIN 분석
- `indexes-performance.md` - 상세 인덱스 전략, 유지보수, 모니터링
- `advanced-patterns.md` - UPSERT, 벌크 작업, 피벗 테이블, JSON 작업, 재귀 쿼리
- `best-practices.md` - SQL 모범 사례 가이드 전체
- `common-pitfalls.md` - 일반적인 실수와 방지 방법

## 빠른 시작 (Quick Start)

### JOIN을 포함한 기본 SELECT

```sql
-- 필터링이 포함된 단순 SELECT
SELECT
    users.name,
    orders.order_date,
    orders.total_amount
FROM
    users
INNER JOIN
    orders ON users.id = orders.user_id
WHERE
    orders.status = 'completed'
ORDER BY
    orders.order_date DESC
LIMIT 10;

-- LEFT JOIN (주문이 없는 사용자도 포함)
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

### 공통 테이블 식별자 (CTEs)

```sql
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
```

고급 패턴은 `examples/complex_queries.sql`을 참조하세요.

## 핵심 역량 (Core Capabilities)

### 쿼리 작성 (Query Writing)
- JOIN, 서브쿼리, CTE 및 윈도우 함수를 포함한 복잡한 SQL 쿼리
- GROUP BY 및 HAVING을 사용한 집계
- 집합 연산 (UNION, INTERSECT, EXCEPT)
- 계층형 데이터를 위한 재귀 CTE
- JSON/JSONB 작업 (PostgreSQL)

### 쿼리 최적화 (Query Optimization)
- EXPLAIN 실행 계획 분석
- 인덱스 권장 사항 도출
- 성능 향상을 위한 쿼리 재작성
- 실행 계획의 이해
- 성능 병목 지점 식별

### 스키마 설계 (Schema Design)
- 데이터베이스 정규화 (1NF, 2NF, 3NF, BCNF)
- 개체-관계(Entity-Relationship) 모델링
- 외래 키(Foreign Key) 제약 조건
- CHECK 제약 조건 및 유효성 검사
- 기본값 및 트리거(Triggers)

### 인덱스 관리 (Index Management)
- 단일 컬럼 및 복합 인덱스
- 고유(Unique) 인덱스
- 부분(Partial) 인덱스 (PostgreSQL)
- 인덱스 유지보수 및 모니터링
- 인덱스 생성 또는 회피 시점 판단

### 데이터베이스 마이그레이션 (Migrations)
- 안전한 스키마 변경
- 무중단 마이그레이션
- 롤백 전략
- 데이터 백필링(Backfilling)
- 스키마 버전 관리

### 디버깅 (Debugging)
- SQL 에러 해석
- 쿼리 트러블슈팅
- 데이터 무결성 문제 해결
- 성능 디버깅
- 제약 조건 위반 해결

## 쿼리 최적화

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

-- 확인할 지표:
-- - Seq Scan (나쁨) vs Index Scan (좋음)
-- - 높은 비용(cost) 수치
-- - 대량의 행 처리 여부
```

### 빠른 최적화 팁

```sql
-- 나쁨: 인덱스 컬럼에 함수 사용
SELECT * FROM users WHERE LOWER(email) = 'user@example.com';

-- 좋음: 인덱스 컬럼 가공 금지
SELECT * FROM users WHERE email = LOWER('user@example.com');

-- 나쁨: SELECT * 사용
SELECT * FROM large_table WHERE id = 123;

-- 좋음: 필요한 컬럼만 명시
SELECT id, name, email FROM large_table WHERE id = 123;
```

상세 기법은 `references/query-optimization.md`를 참조하세요.

## 스키마 설계

### 정규화 예시

```sql
-- 좋음: 주문 항목 테이블 분리 (1NF)
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_name VARCHAR(100),
    order_date DATE
);

CREATE TABLE order_items (
    order_item_id INT PRIMARY KEY,
    order_id INT REFERENCES orders(order_id),
    product_name VARCHAR(100),
    quantity INT,
    price DECIMAL(10, 2)
);
```

### 다대다 관계

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

추가 패턴은 `examples/schema_examples.sql`을 참조하세요.

## 인덱스와 성능

### 인덱스 생성

```sql
-- 단일 컬럼 인덱스
CREATE INDEX idx_users_email ON users(email);

-- 복합 인덱스 (순서가 중요!)
CREATE INDEX idx_orders_user_date ON orders(user_id, order_date);

-- 고유 인덱스
CREATE UNIQUE INDEX idx_users_username ON users(username);

-- 부분 인덱스 (PostgreSQL)
CREATE INDEX idx_active_users ON users(email) WHERE status = 'active';
```

### 인덱스 가이드라인

**인덱스가 필요한 경우:**
- ✅ WHERE 절에 사용되는 컬럼
- ✅ JOIN 조건 컬럼
- ✅ ORDER BY 컬럼
- ✅ 외래 키 컬럼

**인덱스를 피해야 하는 경우:**
- ❌ 작은 테이블 (< 1000행)
- ❌ 선택도가 낮은 컬럼 (예: boolean)
- ❌ 업데이트가 빈번한 컬럼

상세 전략은 `references/indexes-performance.md`를 참조하세요.

## 마이그레이션 (Migrations)

### 안전한 마이그레이션 패턴

```sql
-- 1단계: nullable 컬럼 추가
ALTER TABLE users ADD COLUMN status VARCHAR(20);

-- 2단계: 기존 행 업데이트
UPDATE users SET status = 'active' WHERE status IS NULL;

-- 3단계: NOT NULL 설정
ALTER TABLE users ALTER COLUMN status SET NOT NULL;

-- 4단계: 새 행을 위한 기본값 설정
ALTER TABLE users ALTER COLUMN status SET DEFAULT 'active';

-- 롤백 계획
ALTER TABLE users DROP COLUMN status;
```

추가 패턴은 `examples/migrations.sql`을 참조하세요.

## 고급 패턴

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

    -- Recursive: 하위 직원
    SELECT e.id, e.name, e.manager_id, eh.level + 1
    FROM employees e
    INNER JOIN employee_hierarchy eh ON e.manager_id = eh.id
)
SELECT * FROM employee_hierarchy ORDER BY level, name;
```

고급 패턴은 `references/advanced-patterns.md`를 참조하세요.

## 모범 사례 (Best Practices)

### 핵심 가이드라인

1. **항상 파라미터화된 쿼리를 사용**하여 SQL 인젝션을 방지하세요.
2. **연관된 작업은 트랜잭션을 사용**하여 원자성을 유지하세요.
3. **적절한 제약 조건을 추가**하세요 (PK, FK, NOT NULL, CHECK).
4. **타임스탬프** (created_at, updated_at)를 테이블에 포함하세요.
5. 테이블과 컬럼에 **의미 있는 이름**을 사용하세요.
6. **SELECT * 을 지양**하고 필요한 컬럼만 명시하세요.
7. 조인 성능을 위해 **외래 키에 인덱스**를 고려하세요.
8. 가변 길이 문자열에는 **VARCHAR**를 사용하세요.
9. **NULL 값을 적절히 처리**하세요 (IS NULL / IS NOT NULL).
10. **적절한 데이터 타입**을 사용하세요 (금액은 DECIMAL 권장).

상세 내용은 `references/best-practices.md`를 참조하세요.

## 자주 발생하는 문제 (Common Pitfalls)

1. **N+1 쿼리 문제** - 반복문 대신 JOIN을 활용하세요.
2. **LIMIT 부재** - 대량 테이블 조회 시 성능 저하를 방지하세요.
3. **암시적 타입 변환** - 인덱스 사용을 방해할 수 있습니다.
4. **COUNT(*) 남용** - 존재 여부 파악 시에는 EXISTS가 유리합니다.
5. **NULL 처리 실수** - NULL 비교 연산의 특성을 이해하세요.
6. **임시방편 SELECT DISTINCT** - 근본적인 쿼리 문제를 해결하세요.
7. **트랜잭션 누락** - 연관 작업의 무결성을 보장하세요.
8. **인덱스 컬럼 가공** - 함수 사용 시 인덱스를 타지 못할 수 있습니다.

해결 방법 목록은 `references/common-pitfalls.md`를 참조하세요.

## 지원하는 데이터베이스 시스템

### PostgreSQL
**강점**: 복잡한 쿼리, JSON 데이터, 고급 기능, ACID 준수

### MySQL/MariaDB
**강점**: 웹 애플리케이션, WordPress, 읽기 비중이 높은 워크로드

### SQLite
**강점**: 로컬 개발, 임베디드 DB, 테스트용

### SQL Server
**강점**: 엔터프라이즈 앱, Windows 환경

## 워크플로우 (Workflow)

SQL 데이터베이스 작업 시:

1. **요구 사항 파악** - 어떤 데이터가 필요한가?
2. **스키마 설계** - 정규화 및 데이터 타입 선택
3. **인덱스 생성** - FK 및 주요 쿼리 컬럼 인덱싱
4. **쿼리 작성** - 단순하게 시작하여 점진적으로 확장
5. **최적화** - EXPLAIN으로 병목 지점 확인
6. **테스트** - 샘플 데이터로 검증
7. **문서화** - 복잡한 로직에 설명 추가

마이그레이션 시:
1. **변경 계획 수립** - 영향도 파악
2. **마이그레이션 작성** - Up/Down 모두 작성
3. **복사본 테스트** - 로컬/개발 DB 우선 검증
4. **백업** - 실행 전 필수 단계
5. **실행** - 트래픽이 적은 시간에 수행
6. **검증** - 변경 후 무결성 확인

## 문서 (Documentation)

포괄적인 가이드, 상세 워크플로우 및 고급 기법은 `SKILL.md`를 확인하세요.

## 요구 사항 (Requirements)

- Python 3.7+ (헬퍼 스크립트용)
- 데이터베이스 전용 드라이버 (psycopg2, mysql-connector-python, pyodbc 등)
- SQLAlchemy (선택 사항, ORM용)
- 데이터베이스 서버 접근 권한
