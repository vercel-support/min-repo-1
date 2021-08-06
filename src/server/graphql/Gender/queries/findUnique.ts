import { queryField, nonNull } from 'nexus'

export const GenderFindUniqueQuery = queryField('findUniqueGender', {
  type: 'Gender',
  args: {
    where: nonNull('GenderWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.gender.findUnique({
      where,
      ...select,
    })
  },
})
