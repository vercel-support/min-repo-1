import { mutationField, nonNull } from 'nexus'

export const GenderDeleteOneMutation = mutationField('deleteOneGender', {
  type: 'Gender',
  args: {
    where: nonNull('GenderWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.gender.delete({
      where,
      ...select,
    })
  },
})
