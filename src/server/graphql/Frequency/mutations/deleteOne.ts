import { mutationField, nonNull } from 'nexus'

export const FrequencyDeleteOneMutation = mutationField('deleteOneFrequency', {
  type: 'Frequency',
  args: {
    where: nonNull('FrequencyWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.frequency.delete({
      where,
      ...select,
    })
  },
})
