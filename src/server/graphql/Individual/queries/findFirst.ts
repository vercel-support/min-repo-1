import { queryField, list } from 'nexus'

export const IndividualFindFirstQuery = queryField('findFirstIndividual', {
  type: 'Individual',
  args: {
    where: 'IndividualWhereInput',
    orderBy: list('IndividualOrderByInput'),
    cursor: 'IndividualWhereUniqueInput',
    distinct: 'IndividualScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.individual.findFirst({
      ...args,
      ...select,
    })
  },
})
