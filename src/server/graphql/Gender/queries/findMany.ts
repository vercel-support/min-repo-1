import { queryField, nonNull, list } from 'nexus'

export const GenderFindManyQuery = queryField('findManyGender', {
  type: nonNull(list(nonNull('Gender'))),
  args: {
    where: 'GenderWhereInput',
    orderBy: list('GenderOrderByInput'),
    cursor: 'GenderWhereUniqueInput',
    distinct: 'GenderScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.gender.findMany({
      ...args,
      ...select,
    })
  },
})
