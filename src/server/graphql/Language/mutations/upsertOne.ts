import { mutationField, nonNull } from 'nexus'

export const LanguageUpsertOneMutation = mutationField('upsertOneLanguage', {
  type: nonNull('Language'),
  args: {
    where: nonNull('LanguageWhereUniqueInput'),
    create: nonNull('LanguageCreateInput'),
    update: nonNull('LanguageUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.language.upsert({
      ...args,
      ...select,
    })
  },
})
