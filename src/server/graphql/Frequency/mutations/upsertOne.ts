import { mutationField, nonNull } from 'nexus'

export const FrequencyUpsertOneMutation = mutationField('upsertOneFrequency', {
  type: nonNull('Frequency'),
  args: {
    where: nonNull('FrequencyWhereUniqueInput'),
    create: nonNull('FrequencyCreateInput'),
    update: nonNull('FrequencyUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.frequency.upsert({
      ...args,
      ...select,
    })
  },
})
