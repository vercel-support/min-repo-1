import { queryField, nonNull, list } from 'nexus'

export const GenderFindCountQuery = queryField('findManyGenderCount', {
  type: nonNull('Int'),
  args: {
    where: 'GenderWhereInput',
    orderBy: list('GenderOrderByInput'),
    cursor: 'GenderWhereUniqueInput',
    distinct: 'GenderScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.gender.count(args as any)
  },
})
