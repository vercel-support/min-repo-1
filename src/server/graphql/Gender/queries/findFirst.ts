import { queryField, list } from 'nexus'

export const GenderFindFirstQuery = queryField('findFirstGender', {
  type: 'Gender',
  args: {
    where: 'GenderWhereInput',
    orderBy: list('GenderOrderByInput'),
    cursor: 'GenderWhereUniqueInput',
    distinct: 'GenderScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.gender.findFirst({
      ...args,
      ...select,
    })
  },
})
