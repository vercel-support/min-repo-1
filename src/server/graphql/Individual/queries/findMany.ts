import { queryField, nonNull, list } from 'nexus'

export const IndividualFindManyQuery = queryField('findManyIndividual', {
  type: nonNull(list(nonNull('Individual'))),
  args: {
    where: 'IndividualWhereInput',
    orderBy: list('IndividualOrderByInput'),
    cursor: 'IndividualWhereUniqueInput',
    distinct: 'IndividualScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.individual.findMany({
      ...args,
      ...select,
    })
  },
})
