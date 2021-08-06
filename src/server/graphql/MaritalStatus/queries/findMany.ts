import { queryField, nonNull, list } from 'nexus'

export const MaritalStatusFindManyQuery = queryField('findManyMaritalStatus', {
  type: nonNull(list(nonNull('MaritalStatus'))),
  args: {
    where: 'MaritalStatusWhereInput',
    orderBy: list('MaritalStatusOrderByInput'),
    cursor: 'MaritalStatusWhereUniqueInput',
    distinct: 'MaritalStatusScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.maritalStatus.findMany({
      ...args,
      ...select,
    })
  },
})
