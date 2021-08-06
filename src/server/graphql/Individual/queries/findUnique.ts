import { queryField, nonNull } from 'nexus'

export const IndividualFindUniqueQuery = queryField('findUniqueIndividual', {
  type: 'Individual',
  args: {
    where: nonNull('IndividualWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.individual.findUnique({
      where,
      ...select,
    })
  },
})
