import { mutationField, nonNull } from 'nexus'

export const GenderUpdateOneMutation = mutationField('updateOneGender', {
  type: nonNull('Gender'),
  args: {
    where: nonNull('GenderWhereUniqueInput'),
    data: nonNull('GenderUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.gender.update({
      where,
      data,
      ...select,
    })
  },
})
