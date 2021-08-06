import { queryField, nonNull, list } from 'nexus'

export const IndividualFindCountQuery = queryField('findManyIndividualCount', {
  type: nonNull('Int'),
  args: {
    where: 'IndividualWhereInput',
    orderBy: list('IndividualOrderByInput'),
    cursor: 'IndividualWhereUniqueInput',
    distinct: 'IndividualScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.individual.count(args as any)
  },
})
