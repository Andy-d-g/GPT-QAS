export default [
  {
    question: "Quel est la stack du projet ?",
    answer: `Ce projet implemente la stack suivante : 
        1. Java 11
        2 Spring Boot
        3. Maven 3 or .mvn folder
        4. MongoDB 3.6 (CosmosDB sur Azure)
        5. Lombok
        5. Microsoft Azure API Graph (API REST d'accès aux ressources Azure)
        6. itext pdf (génération de pdf)`,
  },
  {
    question: "Comment installer le projet ?",
    answer: `
      # Install dependencies
      $ mvn clean install

      # Launch with local application yml
      $ mvn spring-boot:run -Dspring-boot.run.profiles=local`,
  },
];
